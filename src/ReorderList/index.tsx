import { Reorder } from "framer-motion";
import { useState } from "react";

export const ReorderList = () => {
  const [items, setItems] = useState([
    { id: 1, color: "#ef4444" },
    { id: 2, color: "#f97316" },
    { id: 3, color: "#f59e0b" },
    { id: 4, color: "#84cc16" },
    { id: 5, color: "#10b981" },
    { id: 6, color: "#06b6d4" },
    { id: 7, color: "#3b82f6" },
    { id: 8, color: "#8b5cf6" },
  ]);

  return (
    <div className="my-8 mx-24">
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Reorder.Item
            className="my-2 py-5 bg-blue-300 text-white rounded-lg relative"
            style={{
              scale: 1,
              background: item.color
            }}
            key={item.id}
            value={item}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
            }}
            whileTap={{
              scale: 1.1,
              boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
            }}
          >
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default ReorderList;
