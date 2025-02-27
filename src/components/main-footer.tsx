import Image from "next/image";
import Link from "next/link";

export default function MainFooter() {
  return (
    <footer className={`relative`}>
      <section
        className={`absolute top-0 left-0 right-0`}
        style={{
          transform: `translateY(-99%)`,
        }}
      >
        <Image
          src={`/raven-on-rock.svg`}
          alt={`RAVENCI crow standing on a rock`}
          width={200}
          height={79}
          className={`mx-auto`}
        />
      </section>

      <section
        className={`px-5 md:px-12 pt-16 pb-6 bg-ravenci-dark text-white`}
      >
        <h4 className={`text-neutral-400/70`}>Services</h4>
        <article
          className={`mt-6 flex flex-wrap gap-x-6 gap-y-5 max-w-2xl text-sm font-light`}
        >
          <p>Business Website Development</p>
          <p>Business Web Design</p>
          <p>UI/UX Design</p>
          <p>Web App Development</p>
          <p>Mobile App Development</p>
          <p>WordPress</p>
          <p>Maintenance</p>
          <p>Domains & Cloud Hosting</p>
        </article>

        <article
          className={`mt-16 pt-3 flex flex-col gap-2 border-t border-neutral-600`}
        >
          <p className={`text-xs text-neutral-500`}>
            © 2018 - 2024 1VINE Design (Operating as{" "}
            <span className={`font-bold`}>RAVENCI</span>)
          </p>

          <div className={`text-xs text-neutral-500`}>
            <Link
              href={`/privacy-policy`}
              className={`py-0.5 hover:px-1 hover:text-white hover:bg-ravenci-primary transition-all duration-300`}
            >
              Privacy Policy
            </Link>
            &nbsp;|&nbsp;
            <Link
              href={`/terms-and-conditions`}
              className={`py-0.5 hover:px-1 hover:text-white hover:bg-ravenci-primary transition-all duration-300`}
            >
              Terms of Service
            </Link>
          </div>
        </article>
      </section>
    </footer>
  );
}
