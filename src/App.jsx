import { nursari } from "../data";
import "./App.css";

function App() {
  const nuresaryData = nursari || {};
  return (
    <>
      <div className="container">
        <h2 className="text-center text-foreground">ওয়াজেদ আলী নূরানীয়া হাফেজীয়া মাদ্রাসা </h2>
        <div className="flex flex-col bg-background">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-[10px] sm:text-xs  text-foreground uppercase dark:text-neufortext-foreground"
                    >
                     নাম 
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-[10px] sm:text-xs  text-foreground uppercase dark:text-neufortext-foreground hidden sm:block"
                    >
                        ক্লাস রোল
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-[10px] text-xs  text-foreground uppercase dark:text-neufortext-foreground"
                    >
                      মোট নাম্বার
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-[10px] sm:text-xs  text-foreground uppercase dark:text-neufortext-foreground"
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
                                  className="w-8 h-8 rounded-full inline-block shrink-0 "
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
                               className="mb-1  duration-200 ease-in-out text-[10px] sm:text-xs  text-foreground/80"
                              >
                               {data.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-smtext-sm text-foreground/80 hidden sm:block">{data.Role}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground/80">
                          {data.totalNumer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground/80  sm:bloc">
                          
                          
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

      </div>
    </>
  );
}

export default App;
