import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return (
<footer className="text-white body-font">
  <div className="container px-5 pt-10 pb-10 md:pt-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-100 md:w-64 flex-shrink-0 md:mx-20  mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <Image src={'/images/f-logo.png'} width={250} height={200}></Image>
      </a>
      <p className="mt-2 text-sm text-white">Pine Book Publishing is a team of passionate book publishers that believe in the power of storytelling and the importance of writers' ability to tell their tales. Our streamlined process and dedicated support make book publishing service a realistic and rewarding goal for any author.</p>
    </div>

    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
     
      <div className="lg:w-1/2 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Contact Info</h2>
        <nav className="list-none mb-10">
          <li>
            <a href="tel:8668417469" className="text-white hover:text-white">(866) 841-7469</a>
          </li>
          <li>
            <a href="mailto:info@pinebookpublishing.com" className="text-white hover:text-white">  info@pinebookpublishing.com </a>
          </li>

        </nav>
      </div>

      <div className="lg:w-1/2 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3 ">Accepted Payment Methods</h2>
        <nav className="list-none mb-10">
          <li>
          <Image src={'/images/visa.webp'} width={250} height={200}></Image>
          </li>
        </nav>
        <div className="flex flex-row">
        <Image className="mr-2" src={'/images/s2.png'} width={100} height={150}></Image>
        <Image src={'/images/bage5.png'} width={100} height={200}></Image>
        </div>
      </div>

    </div>
  </div>

  <div>

    <div className="container text-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white w-full md:text-center text-sm sm:text-left">Copyright © 2024
        <a href="https://pinebookpublishing.com/terms-and-conditions.php" rel="noopener noreferrer" className="text-white ml-1" target="_blank">Terms & Conditions |</a>
        <a href="https://pinebookpublishing.com/privacy-policy.php" rel="noopener noreferrer" className="text-white ml-1" target="_blank">Privacy Policy</a>
      </p>
    </div>
    
  </div>
</footer>
    );
}