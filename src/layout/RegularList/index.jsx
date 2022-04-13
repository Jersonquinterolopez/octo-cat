export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <div className="is-flex is-flex-wrap-wrap">
      {items.map((item) => (
        <ItemComponent key={item.id} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};
