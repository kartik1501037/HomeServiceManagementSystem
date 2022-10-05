const AboutUs = () => {
  return (
    <div>
    <h2 style ={{textAlign:'center',color:'navy', marginTop:10}}>About Us</h2>
    <p style ={{marginTop : 30,fontWeight:600,fontFamily:'cursive', fontSize:19,fontStyle:'',color : 'dimgrey'}}>
                We are India's one of the leading Online Home Services providers. The company was lanched in 2020 
                since then we have achieved great success due to fast and effective services.
                We avail various services which customer can access through our website just in one click.
                The platform helps customers book reliable and high quality services-salon,home cleaning,handymen,
                appliance repairs,plumbing and pest control delivered by trained professionals
                conveniently at home. Our vision is to dempower millions of professionals to deliver services at home like 
                never experienced before.
               </p>
    <img src="https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/on-demand-home-services-main.jpg"
           alt= "image"
           className="rounded mx-auto d-block"
           style={{ height: 300,width:500, display: 'block' }}  />
           <p style ={{marginTop : 40,fontWeight:600,fontFamily:'cursive', fontSize:19,fontStyle:'',color : 'dimgrey'}}>
            We strive for customer satisfaction. We ensure that any of our
            clients will not have any complaints regarding our service providers
            or their work. Our quality control department is always eager to
            fulfill your requests on time and with 100% accountability. We never
            fail to verify the background of each person who visits our client’s
            places. We also take a serious note of their work experiences,
            honesty, as well as authenticity, and open for any feedback from our
            clients to improve the performance.
          </p>
        </div>
  );
};

export default AboutUs;
