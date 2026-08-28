// Dashboard data extracted from the previously hardcoded StatusCard/BodyCard
// instances so the components can render from a single typed source.

/**
 * @typedef {Object} StatusCardData
 * @property {string} label            Header text shown on the card
 * @property {number} completedTasks   Number of completed tasks
 * @property {number} totalTasks       Total number of tasks
 * @property {string} bgColorClass     Tailwind background color class
 */

/** @type {StatusCardData[]} */
export const statusCards = [
  { label: "task completed", completedTasks: 15, totalTasks: 24, bgColorClass: "bg-purple-800" },
  { label: "task completed", completedTasks: 5, totalTasks: 24, bgColorClass: "bg-blue-400" },
  { label: "task completed", completedTasks: 20, totalTasks: 24, bgColorClass: "bg-red-400" },
  { label: "task completed", completedTasks: 5, totalTasks: 24, bgColorClass: "bg-blue-900" },
];

/**
 * @typedef {Object} BodyCardData
 * @property {string | null} subHeader     Small label above the title (null when absent)
 * @property {string} mainHeader           Card title
 * @property {string} bgColorClass         Tailwind background color class
 * @property {string} heightClass          Tailwind height class
 * @property {string | null} colSpanClass  Tailwind column-span class (null when absent)
 */

/** @type {BodyCardData[]} */
export const bodyCards = [
  { subHeader: "OVERVIEW", mainHeader: "Sales values", bgColorClass: "bg-blue-700", heightClass: "h-[500px]", colSpanClass: null },
  { subHeader: "PERFORMANCE", mainHeader: "Total orders", bgColorClass: "bg-blue-700", heightClass: "h-[500px]", colSpanClass: null },
  { subHeader: "5/23 PROJECTS", mainHeader: "Progress track", bgColorClass: "bg-blue-700", heightClass: "h-[500px]", colSpanClass: null },
  { subHeader: null, mainHeader: "Page visits", bgColorClass: "bg-orange-300", heightClass: "h-[500px]", colSpanClass: "lg:col-span-2" },
  { subHeader: null, mainHeader: "Real time", bgColorClass: "bg-orange-300", heightClass: "h-[500px]", colSpanClass: null },
  { subHeader: null, mainHeader: "Team members", bgColorClass: "bg-purple-950", heightClass: "h-[400px]", colSpanClass: null },
  { subHeader: null, mainHeader: "To do list", bgColorClass: "bg-purple-950", heightClass: "h-[400px]", colSpanClass: null },
  { subHeader: null, mainHeader: "Progress track", bgColorClass: "bg-purple-950", heightClass: "h-[400px]", colSpanClass: null },
];
