import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { useSpring, animated } from "react-spring";

const BASE_TIMEOUT = 3200;
const DELAY = 1000;

const AnimateMount: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const styles = useSpring({
    loop: false,
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

const THINGS_I_LOVE = [
  "Cappuccino",
  "Food",
  "Beer",
  "Crypto",
  "Football",
  "Traveling",
  "Rap",
  "Paneer",
  "Techno",
  "Pizza",
  "Cappuccino",
];

export const HeroHome = () => {
  const [isMainTitleVisible, setIsMainTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isCappuccinoVisible, setIsCappuccinoVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMainTitleVisible(true);
    }, BASE_TIMEOUT);

    setTimeout(() => {
      setIsSubtitleVisible(true);
    }, BASE_TIMEOUT + DELAY);

    setTimeout(() => {
      setIsParagraphVisible(true);
      setIsCappuccinoVisible(true);
    }, BASE_TIMEOUT + DELAY * 2);

    setTimeout(() => {
      setIsButtonVisible(true);
    }, BASE_TIMEOUT + DELAY * 3);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-grow-1 w-full align-start h-2/5">
        <div className="flex flex-col min-w-2/3 w-2/3 h-full justify-start">
          <div className="h-4">
            <h4 className="text-xl text-accent font-mono">
              <Typewriter
                options={{
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hello there! Nice to e-meet you, my name is")
                    .start();
                }}
              />
            </h4>
          </div>

          {isMainTitleVisible && (
            <AnimateMount>
              <h1 className="mt-5 ml-[-3px] text-primaryText font-bold">
                Davide Crestini
              </h1>
            </AnimateMount>
          )}

          {isSubtitleVisible && (
            <AnimateMount>
              <h2 className="flex mt-6 mb-4 text-accent font-bold">
                <span className="mr-2">I build web stuff, and I love </span>
                <Typewriter
                  options={{
                    strings: THINGS_I_LOVE,
                    skipAddStyles: true,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
            </AnimateMount>
          )}

          {isParagraphVisible && (
            <AnimateMount>
              <p className="mb-8 w-2/3 text-primaryText">
                I am software engineer designing and building “things” for the
                web. Currently, I work as a Principal Engineer and Tech Lead @{" "}
                <a
                  href="https://theculturetrip.com"
                  target="_blank"
                  rel="noopnener noreferrer"
                >
                  Culture Trip.
                </a>
              </p>
            </AnimateMount>
          )}

          {isButtonVisible && <div>{/* <Button text="VIEW MY WORK" /> */}</div>}
        </div>

        <div className="w-1/3 flex justify-center self-end h-100">
          {isCappuccinoVisible && (
            <AnimateMount>
              <img
                className="h-100"
                src="/images/open-doodles-coffee.png"
                alt="illustration of myself"
                loading="lazy"
              />
            </AnimateMount>
          )}
        </div>
      </div>
    </section>
  );
};
