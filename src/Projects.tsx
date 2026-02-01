export default function Projects() {
    return (
        <section id="projects"
                 className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">

            <h2 className="text-5xl text-emerald-500 font-bold text-center">
                My Projects
            </h2>


            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href= "https://github.com/SherisseTJW/raytracingInAMonth/" className="w-full h-full">
                        <img src=
	"https://github.com/SherisseTJW/raytracingInAMonth/blob/master/images/final_week_render.png"
                             alt="Project 1"
                             className="w-full h-full 
                                        bg-cover rounded"/>
                    </a>
                </div>

                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href=
"https://github.com/SherisseTJW/raytracingInAMonth/">
													Simple Raytracer in Rust
                        </a>
                    </h2>
                    <p>
											This project was done following both the "Ray Tracing in One Weekend" and the "Ray Tracing: The Next Week" books
                    </p>
                </div>
            </div>


	<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
															gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
															hover:shadow-xl hover:scale-[102%] w-full">
									<div className="w-80 rounded">
												<a href= "https://github.com/SherisseTJW/CTRL"
													className="w-full h-full">
													<img src=
	"https://github.com/SherisseTJW/raytracingInAMonth/blob/master/images/final_week_render.png"
															 alt="Project 1"
															 className="w-full h-full 
																					bg-cover rounded"/>
											</a>
									</div>

									<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
											<h2 className="font-bold text-3xl text-center">
													<a className="hover:underline" href="https://github.com/SherisseTJW/CTRL">
	Compiler to Reversible Language (CTRL)
													</a>
											</h2>
											<p>
											This project was completed as part of my Final Year Project (FYP) as a Computer Science Undergraduate in the National University of Singapore (NUS).
												<br></br>
												In it, I created a Proof-of-Concept (PoC) compiler to a reversible version of the x86lite assembly language to allow for the execution of logically reversible programs without incurring developer overhead.
											</p>
									</div>
							</div>
					</section>
			);
}
