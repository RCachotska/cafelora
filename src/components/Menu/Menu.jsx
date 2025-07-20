import { Drink } from "../Drink/Drink";

const response = await fetch ( 'http://localhost:4000/api/drinks');
const receivedData = await response.json();
console.log("Přijatá data:", receivedData);




export const Menu = () => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        

       
        <div className="drinks-list">
          {/* Zde vložíme naši komponentu Drink s vlastními daty */}

      

          <Drink
            id={0}
            name={receivedData.data[0].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[0].image}
            layers={[
          
              {
                color: receivedData.data[0].layers[0].color,
                label: receivedData.data[0].layers[0].label,
                

              },

            ]}
          />

        <Drink
            id={1}
            name={receivedData.data[1].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[1].image}
            layers={[
              {
                color: receivedData.data[1].layers[0].color,
                label: receivedData.data[1].layers[0].label,
                
              },
            ]}
          />



        <Drink
            id={2}
            name={receivedData.data[2].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[2].image}
            layers={[
              {
                color: receivedData.data[2].layers[0].color,
                label: receivedData.data[2].layers[0].label,
                
              },

               {
                color: receivedData.data[2].layers[1].color,
                label: receivedData.data[2].layers[1].label,
                
              },

            ]}
          />

        <Drink
            id={3}
            name={receivedData.data[3].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[3].image}
            layers={[
              {
                color: receivedData.data[3].layers[0].color,
                label: receivedData.data[3].layers[0].label,
                
              },
            ]}
          />


        <Drink
            id={4}
            name={receivedData.data[4].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[4].image}
            layers={[
              {
                color: receivedData.data[4].layers[0].color,
                label: receivedData.data[4].layers[0].label,
                
              },

              {
                color: receivedData.data[4].layers[1].color,
                label: receivedData.data[4].layers[1].label,
                
              },

            ]}
          />

        <Drink
            id={5}
            name={receivedData.data[5].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[5].image}
            layers={[
              {
                color: receivedData.data[5].layers[0].color,
                label: receivedData.data[5].layers[0].label,
                
              },

              {
                color: receivedData.data[5].layers[1].color,
                label: receivedData.data[5].layers[1].label,
                
              },

            ]}
          />
        <Drink
            id={6}
            name={receivedData.data[6].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[6].image}
            layers={[
              {
                color: receivedData.data[6].layers[0].color,
                label: receivedData.data[6].layers[0].label,
                
              },

              {
                color: receivedData.data[6].layers[1].color,
                label: receivedData.data[6].layers[1].label,
                
              },

            ]}
          />

                
           <Drink
            id={7}
            name={receivedData.data[7].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[7].image}
            layers={[
              {
                color: receivedData.data[7].layers[0].color,
                label: receivedData.data[7].layers[0].label,
                
              },

              {
                color: receivedData.data[7].layers[1].color,
                label: receivedData.data[7].layers[1].label,
                
              },

            ]}
          /> 

        <Drink
            id={8}
            name={receivedData.data[8].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[8].image}
            layers={[
              {
                color: receivedData.data[8].layers[0].color,
                label: receivedData.data[8].layers[0].label,
                
              },

              {
                color: receivedData.data[8].layers[1].color,
                label: receivedData.data[8].layers[1].label,
                
              },

              {
                color: receivedData.data[8].layers[2].color,
                label: receivedData.data[8].layers[2].label,
                
              },

            ]}
          />

      
           <Drink
            id={9}
            name={receivedData.data[9].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[9].image}
            layers={[
              {
                color: receivedData.data[9].layers[0].color,
                label: receivedData.data[9].layers[0].label,
                
              },

              {
                color: receivedData.data[9].layers[1].color,
                label: receivedData.data[9].layers[1].label,
                
              },

            ]}
          /> 

        <Drink
            id={10}
            name={receivedData.data[10].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[10].image}
            layers={[
              {
                color: receivedData.data[10].layers[0].color,
                label: receivedData.data[10].layers[0].label,
                
              },

              {
                color: receivedData.data[10].layers[1].color,
                label: receivedData.data[10].layers[1].label,
                
              },

              {
                color: receivedData.data[10].layers[2].color,
                label: receivedData.data[10].layers[2].label,
                
              },

            ]}
          />

        <Drink
            id={11}
            name={receivedData.data[11].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[11].image}
            layers={[
              {
                color: receivedData.data[11].layers[0].color,
                label: receivedData.data[11].layers[0].label,
                
              },

              {
                color: receivedData.data[11].layers[1].color,
                label: receivedData.data[11].layers[1].label,
                
              },

            ]}
          />
        <Drink
            id={12}
            name={receivedData.data[12].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[12].image}
            layers={[
              {
                color: receivedData.data[12].layers[0].color,
                label: receivedData.data[12].layers[0].label,
                
              },

              {
                color: receivedData.data[12].layers[1].color,
                label: receivedData.data[12].layers[1].label,
                
              },

              {
                color: receivedData.data[12].layers[2].color,
                label: receivedData.data[12].layers[2].label,
                
              },

            ]}
          />

        <Drink
            id={13}
            name={receivedData.data[13].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[13].image}
            layers={[
              {
                color: receivedData.data[13].layers[0].color,
                label: receivedData.data[13].layers[0].label,
                
              },

              {
                color: receivedData.data[13].layers[1].color,
                label: receivedData.data[13].layers[1].label,
                
              },

              {
                color: receivedData.data[13].layers[2].color,
                label: receivedData.data[13].layers[2].label,
                
              },
              {
                color: receivedData.data[13].layers[3].color,
                label: receivedData.data[13].layers[3].label,
                
              },

            ]}
          />

        <Drink
            id={14}
            name={receivedData.data[14].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[14].image}
            layers={[
              {
                color: receivedData.data[14].layers[0].color,
                label: receivedData.data[14].layers[0].label,
                
              },

              {
                color: receivedData.data[14].layers[1].color,
                label: receivedData.data[14].layers[1].label,
                
              },

              {
                color: receivedData.data[14].layers[2].color,
                label: receivedData.data[14].layers[2].label,
                
              },
              {
                color: receivedData.data[14].layers[3].color,
                label: receivedData.data[14].layers[3].label,
                
              },
              
            ]}
          />

        <Drink
            id={15}
            name={receivedData.data[15].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[15].image}
            layers={[
              {
                color: receivedData.data[15].layers[0].color,
                label: receivedData.data[15].layers[0].label,
                
              },

              {
                color: receivedData.data[15].layers[1].color,
                label: receivedData.data[15].layers[1].label,
                
              },

              {
                color: receivedData.data[15].layers[2].color,
                label: receivedData.data[15].layers[2].label,
                
              },
             
            ]}
          />
        <Drink
            id={16}
            name={receivedData.data[16].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[16].image}
            layers={[
              {
                color: receivedData.data[16].layers[0].color,
                label: receivedData.data[16].layers[0].label,
                
              },

              {
                color: receivedData.data[16].layers[1].color,
                label: receivedData.data[16].layers[1].label,
                
              },

              {
                color: receivedData.data[16].layers[2].color,
                label: receivedData.data[16].layers[2].label,
                
              },
             
            ]}
          />
        <Drink
            id={17}
            name={receivedData.data[17].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[17].image}
            layers={[
              {
                color: receivedData.data[17].layers[0].color,
                label: receivedData.data[17].layers[0].label,
                
              },

              {
                color: receivedData.data[17].layers[1].color,
                label: receivedData.data[17].layers[1].label,
                
              },

              {
                color: receivedData.data[17].layers[2].color,
                label: receivedData.data[17].layers[2].label,
                
              },
             
            ]}
          />

        <Drink
            id={18}
            name={receivedData.data[18].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[18].image}
            layers={[
              {
                color: receivedData.data[18].layers[0].color,
                label: receivedData.data[18].layers[0].label,
                
              },

              {
                color: receivedData.data[18].layers[1].color,
                label: receivedData.data[18].layers[1].label,
                
              },
            ]}
          />
        <Drink
            id={19}
            name={receivedData.data[19].name}
            ordered={false}
            image={"http://localhost:4000"+ receivedData.data[19].image}
            layers={[
              {
                color: receivedData.data[19].layers[0].color,
                label: receivedData.data[19].layers[0].label,
                
              },

              {
                color: receivedData.data[19].layers[1].color,
                label: receivedData.data[19].layers[1].label,
                
              },
            ]}
          />


        </div>

        </div>



        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
     


    </section>


  );
};


/*
 layers={[
              {
                color: '#FED766',
                label: 'mléčná pěna',
              },
              {
                color: '#66feeaff',
                label: 'mléko',
              },
              {
                color: '#613916',
                label: 'espresso',
              },
            ]}
          />

*/




                           
















