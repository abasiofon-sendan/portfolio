
import avatar from "../assets/avatar.jpg";
// eslint-disable-next-line no-unused-vars
import { delay, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faTelegram, faXTwitter  } from "@fortawesome/free-brands-svg-icons";


//SLIDE DOWN
const slideDown = {
  hidden: { opacity: 0, y: -80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
        delay: 0.5,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

//SLIDE UP
const slideUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

//CONTAINER
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
        delayChildren: 0.3,
      staggerChildren: 0.5, // delay between buttons
    },
  },
};

//SLIDE UP WITH STAGGER
const staggerUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

//IMAGE FADEIN
const fadeIn = {
    hidden: { opacity: 0, y:30 },
  show: { 
    opacity: 1, y:0,
    transition: {
      duration: 1.2,
      ease: "easeOut"
      
    }
  }
}


function Profile() {
  return (

      <main className="grid place-content-center min-h-screen md:grid-cols-2 md:place-content-start md:items-center  md:mt-20 md:min-h-0 md:max-w-4xl md:mx-auto p-8">
        <section className="flex flex-col md:items-start">
          {/*SLIDE DOWN ANIMATION*/}
          <motion.div
            variants={slideDown}
            initial="hidden"
            animate="show"
            className="relative inline-block w-32 md:w-40 bg-blue-600 text-center text-white px-4 py-1 md:text-xl md:py-2 rounded-lg"
          >
            Hello World!
            <div
              className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 
              border-l-8 border-l-transparent 
              border-r-8 border-r-transparent 
              border-t-8 border-t-blue-600"
            ></div>
          </motion.div>
          <div className="mt-5">
            <motion.h1
              variants={slideDown}
              initial="hidden"
              animate="show"
              className="font-bold text-2xl mb-5 md:text-5xl"
            >
              I am Abasiofon Sendan
            </motion.h1>

            {/*SLIDE UP ANIMATION*/}
            <motion.h2
              variants={slideUp}
              initial="hidden"
              animate="show"
              className="text-2xl md:text-4xl font-semibold text-blue-600"
            >
              Backend Developer
            </motion.h2>

            {/*STAGGER UP ANIMATION*/}
            <motion.div variants={container}
      initial="hidden"
      animate="show" className="text-[#525252] text-xs md:text-sm mt-5 font-medium text-nowrap">
              <motion.p variants={staggerUp} >
                From neural nets to scalable software.
              </motion.p>
              <motion.p variants={staggerUp} >
                5+ years of building web products and startups.
              </motion.p>
              <motion.p variants={staggerUp} >
                Now Co-Founder @ Webcoin Technologies
              </motion.p>
            </motion.div>

            {/*BUTTON ANIMATION*/}
            <motion.div variants={container}
      initial="hidden"
      animate="show" className="flex gap-3 md:gap-7 mt-4 text-[#525252] ">
              <motion.button 
              variants={staggerUp} 
              >
                <FontAwesomeIcon className="size-7 hover:text-blue-600 hover:bg-blue-50 hover:border p-2 hover:rounded-full " icon={faGithub} />
              </motion.button>
              <motion.button
              variants={staggerUp} 
              >
                <FontAwesomeIcon className="size-7 hover:text-blue-600 hover:bg-blue-50 hover:border p-2 hover:rounded-full " icon={faLinkedin} />
              </motion.button>

              <motion.button
              variants={staggerUp} 
              >
                <FontAwesomeIcon className="size-7 hover:text-blue-600 hover:bg-blue-50 hover:border p-2 hover:rounded-full " icon={faXTwitter} />
              </motion.button>

              <motion.button
              variants={staggerUp} 
              >
                <FontAwesomeIcon className="size-7 hover:text-blue-600 hover:bg-blue-50 hover:border p-2 hover:rounded-full " icon={faInstagram} />
              </motion.button>

<motion.button
              variants={staggerUp} 
              >
                <FontAwesomeIcon className="size-7 hover:text-blue-600 hover:bg-blue-50 hover:border p-2 hover:rounded-full " icon={faTelegram} />
              </motion.button>
              
            </motion.div>
          </div>
        </section>
        <motion.div variants={fadeIn}
          initial="hidden"
          animate="show" className="mt-7 md:flex md:justify-end">
          <img
            className="size-40 md:size-64 border rounded-2xl"
            src={avatar}
            alt="Abasiofon Sendan"
          />
        </motion.div>
      </main>
      

  );
}
export default Profile;
