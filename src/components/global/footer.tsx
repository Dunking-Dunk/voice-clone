// export default function Home() {
//     // ...
//     return (
//       <main className="overflow-x-hidden">
//         {/* ... */}
//         <Footer />
//       </main>
//     );
//   }
const Footer = () => {
  // Return a JSX element that represents the component's UI
  return (
    // The footer element has a class name of "text-center py-8" and a child p element
    <footer className="text-center py-8">
      {/* The p element contains the text "Made in Chennai with ❤️" */}
      <p>Made in Chennai with ❤️</p>
    </footer>
  );
};

// Export the Footer component so it can be used in other parts of the app
export default Footer;