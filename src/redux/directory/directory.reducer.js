const INITIAL_STATE ={
    sections :[
        {
          title: 'کلاه',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'پیراهن(به زودی)',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'کفش',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'زنانه(به زودی)',
          imageUrl: 'https://dkstatics-public.digikala.com/digikala-categories/65bd5d2037d516c784b1b3509fe0f764319320f7_1615645349.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'مردانه(به زودی)',
          imageUrl: 'https://dkstatics-public.digikala.com/digikala-categories/923c28e33dc2fc841a5f8378f1b5706df3cbb554_1615645242.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
};
 const directoryReducer = (state=INITIAL_STATE,action)=>{
        switch(action.type){
            default:
                return state;
        }
 };

 export default directoryReducer;