"use client";
import { useState } from "react";
import data from "../../components/Data/tourCardData";
import { useParams } from "next/navigation";
import Image from "next/image";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import styles from "../../styles/style.module.css";


export default function Page() {
  const tourName = useParams()?.type;
  const [selected, setselected] = useState(null);
  const [showData, setShowData] = useState(false)

  function handleSingleClick(currentId) {
    setselected(currentId === selected ? null : currentId);
  }

  return (
    <div>
      <Image
        src="/tourcover.jpg"
        alt="cover-photo"
        sizes="100vw"
        height={200}
        width={1200}
        loading="lazy"
        style={{
          height: "300px",
          width: "100vw",
          objectFit: "cover",
        }}
      />
      <h1 class="text-center text-3xl text-white font-medium mb-16 -mt-16">{`${tourName} TOUR`}</h1>
      <h1 class="text-3xl font-medium pl-10 pt-16">Overview</h1>
      {data.map((tour) => (
        <div key={tour.id} class="p-10 h-3/4">
          <div>
            <p class="w-1/2 font-thin mb-16 text-xl">{tour?.overview}</p>
          </div>
          {tour && tour?.tourDetails && tour?.tourDetails.length
            ? tour?.tourDetails.map((item) => (
                <div className={styles.wrapper} key={item?.id}>
                  <div className={styles.accordian}>
                    <div
                      key={item.id}
                      className={styles.item}s
                      onClick={() => {
                        handleSingleClick(item.id)
                        setShowData(!showData)
                      }}
                    >
                      <div className={styles.title}>
                        <h3>{item?.day}</h3>
                        <span>{showData ? <MdOutlineKeyboardArrowUp /> :<MdKeyboardArrowDown /> }</span>
                      </div>
                      {selected === item?.id ? (
                        <div className={styles.content}>{item?.detail}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      ))}
    </div>
  );
}
