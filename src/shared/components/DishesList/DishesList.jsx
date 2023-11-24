import SingleCard from "../SingleCard/SingleCard";

const DishesList = ({items}) => {
   

   
      const element =
        items && items.length
          ? items.map(({ _id, title, imgUrl, weight, price }) => {
              return (
                <li key={_id}>
                  <SingleCard
                    name={title}
                    imgUrl={imgUrl}
                    // description={description}
                    weight={weight}
                    price={price}
                  />
                </li>
              );
            })
          : null;
        
    
     return <>{element}</>
}
 export default DishesList;
