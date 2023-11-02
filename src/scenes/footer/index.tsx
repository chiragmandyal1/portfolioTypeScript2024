import Logo from "@/assets/Logo.png";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            hagsvd sad ada sd as da sd as dasda sd as da sdasdasd dasd asdasda
            sdasd asdasd asdasdas dasdasdasdasd
          </p>
          <p> asd asd asd asd asd asd asd </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">asdasdasd </p>
          <p className="my-5">asdasdjhb </p>
          <p>asdaasdasds </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">asd asdasd asdasd asdasd </p>
          <p>(333)425-6825 </p>
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
