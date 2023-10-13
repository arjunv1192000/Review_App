import reviewdata from "../Models/DataModel.js";

const Controllers={



     Addreview:async(req,res)=>{
        console.log(req.body);
        const {name,email,usageFrequency,mainAppGoals,userExperienceRating,improvements,dateOfBirth}=req.body
        const newReview = new reviewdata({
            name,
            email,
            usageFrequency,
            mainAppGoals,
            userExperienceRating,
            improvements,
            dateOfBirth
          });
      
          try {
           
            const savedReview = await newReview.save();
            res.status(201).json({savedReview,status:true});
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to add review data to the database" });
          }
        

     },




     Getreview: async (req, res) => {
      try {
        
        const allReviews = await reviewdata.find();

        console.log(allReviews);
  
        res.status(200).json({ reviews:allReviews, status: true });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to retrieve review data from the database" });
      }
    },

}
export default Controllers