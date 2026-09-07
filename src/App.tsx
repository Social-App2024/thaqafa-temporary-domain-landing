import "./App.css";
import Silk from "./components/silk.tsx";
import { FacebookLogoIcon, InstagramLogoIcon, XLogoIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import SocialIcon from "./components/socialIcon.tsx";

function App() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.5,
            ease: "easeOut",
            delayChildren: 0.4,
          },
        },
      }}
      className="min-h-dvh w-screen relative"
    >
      <div className="absolute inset-0 z-0">
        <Silk
          speed={5}
          scale={1.4}
          color="#449699"
          noiseIntensity={0.7}
          rotation={0}
        />
      </div>
      <motion.div
        className="relative min-h-dvh w-full flex items-center justify-center z-10 gap-y-10 py-5"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 1.0,
              ease: "easeOut",
            },
          },
        }}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="lg:text-[10vw] text-[20vw] font-manrope font-extralight text-[#E3E8E8]">
              thaqafa
            </h1>
            <h2 className="font-manrope font-light text-[#E9F0F0] lg:text-[1.5vw] text-[6vw]">
              coming soon
            </h2>
          </div>
          <div className="z-10 flex gap-6 mt-10 lg:mt-12">
            <SocialIcon disabled={false} href="https://www.facebook.com/thaqafasocial"
            >
              <FacebookLogoIcon
                className="lg:text-[2vw] text-[7vw] text-white"
                weight="light"
              />
            </SocialIcon>
            <SocialIcon disabled={false} href="https://www.instagram.com/thaqafa_social/"
            >
              <InstagramLogoIcon
                className="lg:text-[2vw] text-[7vw] text-white"
                weight="light"
              />
            </SocialIcon>
            <SocialIcon disabled={false} href="https://x.com/thaqafa_social"
            >
              <XLogoIcon
                className="lg:text-[2vw] text-[7vw] text-white"
                weight="light"
              />
            </SocialIcon>
            {/* <SocialIcon disabled={false}> */}
            {/*   <GlobeIcon */}
            {/*     className="lg:text-[2vw] text-[7vw] text-white" */}
            {/*     weight="light" */}
            {/*   /> */}
            {/* </SocialIcon> */}
          </div>
          <a className="lg:mt-8 mt-6 px-6 py-2.5 lg:px-8 lg:py-3 rounded-xl transform  border-2 
  border-white/70
  shadow-[0_0_35px_rgba(255,255,255,0.15)]
  transition-all duration-300 bg-[#E3E8E8] text-[#449699] hover:bg-transparent hover:text-white font-manrope font-medium tracking-[2px] text-[5vw] lg:text-[2vw] hover:scale-[102%]"
            target="_blank"
            href="https://forms.gle/DZvUAM9FEWubSvcL7"
          >
            join the waitlist
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default App;
