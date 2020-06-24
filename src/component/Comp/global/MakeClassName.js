
export const MakeClassName = (baseClassName, condition) => {
  if (condition) return baseClassName + condition;
  else return baseClassName;
};
