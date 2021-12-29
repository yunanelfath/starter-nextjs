import { useWindowSize } from "./../helper";

export const Contact = (props) => {
  const { bg } = props;
  const screenSize = useWindowSize();
  const screenMobile = screenSize.width <= 420;
  return (
    <section
      className="p-8 md:px-24 md:py-24"
      style={{
        backgroundColor: bg !== "white" ? "rgba(16, 163, 59, 0.2)" : "#ffffff",
      }}
    >
      <div className="text-center md:text-left">
        <p className="text-brand-secondary text-center font-medium text-2xl">
          CONTACT US
        </p>

        {screenMobile && (
          <div>
            <img
              src="image-qrcode-whatsapp.png"
              className="mx-auto my-4 w-24"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-12">
          <div>
            <div>
              <p>Address</p>
              <p>lorem ipsum blablabla</p>
              <p>Surabaya - Jawa Timur</p>
              <div className="mt-8">
                <p>lorem ipsum blablabla</p>
                <p>234234</p>
                <p>(031) 234234234</p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-flow-col grid-cols-2 gap-4">
              <div>
                <p>Office Hours</p>
                <p>Monday - Friday</p>
                <p>08.00 - 17.00 WIB</p>
              </div>
              <div>
                <p>Sample Hours</p>
                <p>Monday - Friday</p>
                <p>08.00 - 14.00 WIB</p>
              </div>
            </div>
            <div className="my-8">
              <button className="bg-brand-primary text-white px-6 py-2 rounded w-full md:font-bold">
                Full Site Map
              </button>
            </div>
          </div>

          {!screenMobile && (
            <div>
              <img
                src="image-qrcode-whatsapp.png"
                className="mx-auto mb-4 w-40"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
