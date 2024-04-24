


export default function HeroForm(){

    async function handleSubmit(event) {

        event.preventDefault();
        const formData = new FormData(event.target)
        try {
    
            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
            });
            console.log(response);
            console.log(formData);
    
            // if (!response.ok) {
            //     console.log("falling over")
            //     throw new Error(`response status: ${response.status}`);
            // }
            const responseData = await response.json();
            console.log(responseData['message'])
    
            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    };

    return (
        <div className="container mx-4 pt-20 md:mx-40">
        <div className="grid grid-cols-1 sm:gap-8 sm:py-0 md:grid-cols-2 text-left items-center justify-between md:gap-8 md:py-36">
          <div className="mb-4">
            <h2 className="text-sm md:base"><span> #1 SELF </span> PUBLISHING COMPANY</h2>
            <h1 className="font-majallab text-3xl md:text-7xl">Publish Your Dreams!</h1>
            <p>Our comprehensive KDP <span> (Kindle Direct Publishing) and Self-Publishing Services</span> transform your manuscript from editing to distribution, ensuring it is accessible to readers globally.</p>
          </div>
        <div>
            <div className="w-full rounded-2xl px-8 py-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div class="relative"> 
                  <input type="text" 
                  name="name"
                        class="pl-4 pr-4 py-2 border rounded-lg w-full" 
                        placeholder="Enter your Name" /> 
                   
              </div>
              <div class="relative"> 
                  <input type="text" 
                  name="phone"
                        class="pl-4 pr-4 py-2 border rounded-lg w-full" 
                        placeholder="Enter your Phone" /> 
                   
              </div> 
              <div class="relative"> 
                  <input type="text" 
                  name="email"
                        class="pl-4 pr-4 py-2 border rounded-lg w-full" 
                        placeholder="Enter your Email" /> 
                   
              </div> 
              <div class="relative"> 
                  <textarea 
                        class="pl-4 pr-4 py-2 border rounded-lg w-full" rows={5}
                        placeholder="Enter your Message" name="message"></textarea> 
                  <div class="absolute inset-y-0 left-0 pl-3 pt-3 
                              flex items-start  
                              pointer-events-none"> 
                      
                  </div> 
              </div>
              <button className="p-4 w-full bg-green-500 uppercase text-white rounded font-poppins" type="submit">Submit</button>
              </form>
            </div>
        </div>
        </div>

        </div>
    );
}