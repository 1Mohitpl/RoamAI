import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelList } from "@/Constants/options";

function CreateTrip() {
  return (
    <>
      <div className=" flex flex-col gap-2 sm:px-10 md:px-32 lg:px-56 xl:px-10 px:5 mt-20">
        <h2 className="font-bold text-3xl"> Tell us Your Travel preferences 🌏</h2>
        <p className="mt-3 text-gray-500 text-xl">
          {" "}
          Just Provide some basic information about your plan and our trip
          planner will make for you!
        </p>

        <div className="mt-10 flex  gap-9">
          <div>
            <h2 className="text-xl my-3 font-medium">
              what is destination of choice?
            </h2>
            <input className="margin-2" type="text" placeholder="type here..."></input>
          </div>
        </div>

        <div>
          <Input placeholder={"EX.3"} type="number" />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What is your budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg hover:shadow-lg cursor-pointer bg-orange-200"
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-600">{item.desc}</h2>
              </div>
            ))}
          </div>
       </div>

       <div>
          <h2 className="text-xl my-3 font-medium">Plan your perfect journey together</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelList.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg hover:shadow-lg cursor-pointer bg-orange-200"
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-600">{item.desc}</h2>
              </div>
            ))}
          </div>
       </div>
   
   <div className="my-10 justify-end flex ">
   <Button className = "font-bold">Generate Dream Plan</Button>
   </div>

     







      </div>
    </>
  );
}

export default CreateTrip;
