import { useDispatch, useSelector } from "react-redux";
import { bagItemsActions } from "../Store/bagItemsSlice";

function DisplayItems() {
  let items = useSelector((store) => store.items.items);
  let clickedItems = useSelector((store) => store.bagItems.clicked);
  let dispatch = useDispatch();
  let handleAdd = (item) => {
    dispatch(
      bagItemsActions.add({
        clickedItem: item,
      })
    );
  };

  let handleDelete = (item) => {
    dispatch(
      bagItemsActions.delete({
        item: item,
      })
    );
  };

  return (
    <>
      {items.map((item) => {
        return (
          <div className="item-container" key={item.item_name}>
            <img className="item-image" src={item.image} alt="item image" />
            <div className="rating">
              {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                ({item.discount_percentage}% OFF)
              </span>
            </div>
            {clickedItems.includes(item.id) ? (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(item)}
              >
                Remove from bag
              </button>
            ) : (
              <button className="btn-add-bag" onClick={() => handleAdd(item)}>
                Add to Bag
              </button>
            )}
          </div>
        );
      })}
    </>
  );
}

export default DisplayItems;
