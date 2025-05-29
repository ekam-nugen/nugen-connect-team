export type GroupedTableCardProps = {
  allExpanded: boolean;
  toggledArrows: Record<number, boolean>;
  handleToggle: (idx: number) => void;
  handleExpandCollapseAll: () => void;
};
