import Link from 'next/link';
import { redirect } from 'next/navigation';
const NotFoundPage = () => {
    //   return (
    //     <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
    //       <h1 className='text-4xl'>404 - Page Not Found</h1>
    //       <p>The page you are looking for does not exist.</p>
    //       <Link href="/" className='-mt-1 underline'>
    //         Click Here to go back to the home page.
    //       </Link>
    //     </div>
    //   );
    redirect("/");
};
export default NotFoundPage;
