const RightContact = () => {
  return (
    <>
      {/* <h5 className="text-xl text-[#4b4b4b] italic">Tasty and fresh greens</h5> */}

      <h2 className="uppercase text-3xl mt-4 tracking-[3px]">WE ARE HERE</h2>

      <p className="text-lg pr-6 mt-4 text-[#6b6b6b]">
        KIMEN COMPANY LIMITED 
      </p>

      <ul className="mt-6 flex flex-col gap-4">
        <li className="flex gap-2">
          <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg></span>
          <p className="text-base text-[#5A6A6A]">
          ROOM 102, IST FLOOR, HALO BUILDING, 39 DINH CONG TRANG, TẠN DINH WARD, DISTRICT 1, HCMC          </p>
        </li>
        <li className="flex gap-2">
          <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg></span>
          <p className="text-base text-[#5A6A6A]">
            abc@gmail.com
          </p>
        </li>
        <li className="flex gap-2">
          <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"/></svg></span>
          <p className="text-base text-[#5A6A6A]">
          + 55 66 1234
          </p>
        </li>
        {/* <li className="flex gap-2">
          <span>icon</span>
          <p className="text-base text-[#5A6A6A]">
            Lombardy, Giotto Rue 55 22 130
          </p>
        </li> */}
      </ul>
    </>
  );
};

export default RightContact;
