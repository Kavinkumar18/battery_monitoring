import { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import { ref, onValue, query, limitToLast } from "firebase/database";

function useTimelineData(dbPath: string): object | null {
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    if (!dbPath) return;

    const currentRef = query(ref(db, dbPath), limitToLast(10));

    const unsubscribe = onValue(currentRef, (snapshot) => {
      if (snapshot.exists()) {
        const rawData = snapshot.val();

        // Transform the data into an object with key-value pairs
        const formattedData = Object.entries(rawData).reduce((acc, [key, value]) => {
          acc[key] = value as number;
          return acc;
        }, {} as { [key: string]: number });

        setData(formattedData);
      }
    });

    return () => unsubscribe();
  }, [dbPath]);

  return data;
}

export default useTimelineData;
