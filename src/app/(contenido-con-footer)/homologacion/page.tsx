"use client";

import styles from "./homologacion.module.css";
import OperadoresEmpresas from "@/src/components/sections/OperadoresEmpresas/OperadoresEmpresas";

const Homologacion = () => {
  return (
    <div className={styles.container}>
      <OperadoresEmpresas />
    </div>
  );
};

export default Homologacion;
