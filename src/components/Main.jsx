import { styles } from "../styles";

export const Main = () => {
  return (
    <section className="relative w-full h-[40rem] mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FF0000]" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>
        <div>
          <h1 className={`text-white ${styles.mainHeadText}`}>Лучший <span className="text-[#FF0000]">Мерч</span> для лучших людей</h1>
          <p className={`${styles.mainSubText} mt-2 text-white-100`}>Изготовим вещь с любым принтом для вашего бизнеса. <br className="sm:block hidden"/> От идеи до производства и доставки.</p>
        </div>
      </div>
    </section>
  );
};
