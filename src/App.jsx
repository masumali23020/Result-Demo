import { nursari } from "../data";
import "./App.css";

function App() {
  const nuresaryData = nursari || {};
  return (
    <>
      <div className="container">
      
       
      <div className="felx flex-col justify-center items-center space-y-1 mb-3">
      <h2 className=" text-[12px] sm:text-xs  text-foreground uppercase dark:text-neufortext-foreground">ওয়াজেদ আলী নূরানীয়া হাফেজীয়া মাদ্রাসা </h2>
      <p className="text-[10px] sm:text-xs  text-foreground uppercase dark:text-neufortext-foreground/70">
      দ্বিতীয় সাময়িক পরীক্ষা ফলাফল - <span className="text-fuchsia-200">2024</span>
      </p>
      <p className="text-[10px] sm:text-xs  text-foreground/60 uppercase dark:text-neufortext-foreground  ">
      শ্রেণী:নার্সারি
      </p>
      </div>

        <div className="flex flex-col bg-background">

        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden border border-border px-3 rounded-md">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr >
                    <th
                      scope="col"
                      className="px-2 py-1.5 text-start text-[10px] sm:text-xs  text-foreground uppercase dark:text-neufortext-foreground"
                    >
                     নাম 
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1.5 text-start text-[10px] sm:text-xs  text-foreground uppercase dark:text-neufortext-foreground hidden sm:block"
                    >
                        ক্লাস রোল
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1.5 text-end text-[10px] sm:text-xs  text-foreground uppercase dark:text-neufortext-foreground"
                    >
                      মোট নাম্বার
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1.5 text-end text-[10px] sm:text-xs  text-foreground uppercase dark:text-neufortext-foreground"
                    >
                      র‍্যাঙ্ক
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border dark:divide-neutral-700">
                  {nuresaryData.map((data) => {
                    const imageId = data || {};
                    const { avata } = imageId;

                    return (
                      <tr
                        key={data.Role}
                        className="hover:bg-background/80"
                      >
                        <td className="p-3 pl-0">
                          <div className="flex items-center">
                            <div className="relative inline-block shrink-0 rounded-2xl me-3">
                              {avata ? (
                                <img
                                  className="w-6 h-6 bg-cover rounded-full inline-block shrink-0 "
                                  src={`https://drive.google.com/thumbnail?id=${avata}`}
                                  alt="Rounded avatar"
                                ></img>
                              ) : (
                                <img
                                  className="w-10 h-10 rounded-full"
                                  src="/docs/images/people/profile-picture-5.jpg"
                                  alt="Rounded avatar"
                                ></img>
                              )}
                            </div>
                            <div className="flex flex-col justify-start">
                              <p
                               className="text-[8px]  sm:text-xs  text-foreground/80"
                              >
                               {data.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className=" text-[8px]  sm:text-xs  text-foreground/80 hidden sm:block">{data.Role}</td>
                        <td className="text-[8px]  sm:text-xs  text-foreground/80">
                          {data.totalNumer}
                        </td>
                        <td className="text-[8px]  sm:text-xs  text-foreground/80">
                          
                          
                           {data.rank}
                        
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-1 ">
      <div className="flex  justify-center items-center"><p className="md:text-base text-[8px] md:font-normal font-light">Copyright © 2024 <span className="text-slate-400"><a href="https://dsa-rosy.vercel.app/">Masum Billah</a> </span></p></div>
      </footer>

  

      </div>
    </>
  );
}

export default App;
