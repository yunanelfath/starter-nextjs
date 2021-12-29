import { useWindowSize } from "./../helper";
import { linkList, socmedList } from "./../helper/const";

export const Footer = () => {
  const screenSize = useWindowSize();
  const screenMobile = screenSize.width <= 420;
  return (
    <footer className="p-8 md:px-24 bg-brand-secondary md:py-12">
      <div className="grid md:grid-flow-col grid-cols-1 md:grid-cols-3 gap-2 md:gap-16 mt-6 md:mt-12 text-white">
        
        <div>
          <p className="">
            lorem ipsum blablabla
          </p>
        </div>

        {!screenMobile && (
          <div>
            <p>Quick Link</p>

            <div className="mt-8">
              {linkList.map((val, i) => (
                <p>{val.name}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
