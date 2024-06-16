import React, { useState } from "react";
import { motion, Reorder, AnimatePresence } from "framer-motion";
import { Tab } from "./Tab";
import { allIngredients, initialTabs, getNextIngredient } from "./Ingredients";
import { removeItem, closestItem } from "./array-utils";
import { CgMathPlus } from "react-icons/cg";

export default function Ventana() {
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const remove = (item) => {
    if (item === selectedTab) {
      setSelectedTab(closestItem(tabs, item));
    }

    setTabs(removeItem(tabs, item));
  };

  const add = () => {
    const nextItem = getNextIngredient(tabs);

    if (nextItem) {
      setTabs([...tabs, nextItem]);
      setSelectedTab(nextItem);
    }
  };

  return (
    <div className="custom">
      <div className="window1">
        <nav className="nav1">
          <Reorder.Group
            as="ul"
            axis="x"
            onReorder={setTabs}
            className="tabs-custom"
            values={tabs}
          >
            <AnimatePresence initial={false}>
              {tabs.map((item) => (
                <Tab
                  key={item.label}
                  item={item}
                  isSelected={selectedTab === item}
                  onClick={() => setSelectedTab(item)}
                  onRemove={() => remove(item)}
                />
              ))}
            </AnimatePresence>
          </Reorder.Group>
          <motion.button
            className="add-item-custom"
            onClick={add}
            disabled={tabs.length === allIngredients.length}
            whileTap={{ scale: 1 }}
          >
            <div className="ml-2 mr-4">
              <CgMathPlus />
            </div>
          </motion.button>
        </nav>
        <main className="main1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            >
              {selectedTab ? selectedTab.icon : "😎"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
