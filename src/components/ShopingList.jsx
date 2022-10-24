// const products = [
//     { title: 'Cabbage', id: 1 },
//     { title: 'Garlic', id: 2 },
//     { title: 'Apple', id: 3 },
//   ];
// function ShopingList(){
//     const ListItems=products.map(product => <li key={product.id}>{product.title}</li>)
//     return(
//         <div>
//             <ul>{ListItems}</ul>
//         </div>
//     )
// }
// export default ShopingList;

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

export default function ShopingList(){
    const listItems=products.map(product => 
    <li key={product.id}
        style={{
            color:product.isFruit ? 'magenta' : 'darkgreen'
        }}
    >{product.title}
    </li>)
    return(
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}