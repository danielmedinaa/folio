import info from "../resources/img/inf.png";
import sync from "../resources/img/sync.png";
import pan from "../resources/img/pan.jpg";
import zm from "../resources/img/logo-blanco-render.png";
import plicores from "../resources/img/logo.png";
import cicm from "../resources/img/cicm.jpeg";
import bot from "../resources/img/bot-1.png";
import infinty from "../resources/img/infinity.png"

function FolioObjects() {
    var cards = [
        {
            ruta:bot,
            titulo: "BOT DE WHATSAPP",
            desc: "Bot de envío de mensajes masivos a WhatsApp extrayendo la información de un archivo de Excel. Programa funcional y ya en producción; Me encargué del FrontEnd y de la lógica de los templates y envio de mensajes.",
            tech: ["PYTHON","FLET","EXCEL"]
        },
        {
            ruta: infinty,
            titulo: "TIENDA EN LÍNEA DE INFINITY FULL C.A",
            desc: "Tienda virtual desarrollada en WordPress para la digitalizar las ventas de la empresa venezolana INFINITY FULL C.A",
            tech: ["WORDPRESS"]
        },
        {
            ruta: info,
            titulo: "PERÍODICO DÍGITAL",
            desc: "Periodíco digital que le facilita al periodista publicar entradas y noticias a cualquier hora del día desde cualquier lugar.",
            tech: ["WORDPRESS"]
        },
        {
            ruta: sync,
            titulo: "SISTEMA DE VENTAS LITE SyncScript",
            desc: "SyncScript es un sistema que te permite gestionar tus productos en stock, tus ventas y tus clientes de manera dinámica.",
            tech: ["PHP", "HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT", "MYSQL"]
        },
        {
            ruta: pan,
            titulo: "PROYECTO UNIVERSITARIO PARA PANADERÍA",
            desc: "Este sistema permite mantener una gestión de los ingredientes y otros insumos de un pan para una panadería, me encargué del FrontEnd del sistema.",
            tech: ["PYTHON", "TTKBOOTSTRAP", "MARIA DB"]
        },
        {
            ruta: zm,
            titulo: "LOGO PARA EMPRESA DE MARKETING ZEBRA MARKET",
            desc: "Logo minimalista y elegante diseñado para una empresa de marketing dónde la imágen corporativa hace referencia a la sencillez y elegancia. Logo de práctica",
            tech: ["ADOBE PS6"]
        },
        {
            ruta: plicores,
            titulo: "LOGO DISEÑADO PARA MARCA DE LICORES: PÁRAMO LICORES",
            desc: "Logo a estilo vintage, dónde se refleja una montaña haciendo referencia al nombre de la marca, colores elegantes y estilo minimalísta.",
            tech: ["ADOBE PS6"]
        },
        {
            ruta: cicm,
            titulo: "LOGO PARA CONSULTORÍA JURÍDICA",
            desc: "Diseño dónde el cliente puede ver un ejemplo de uso para el logotipo diseñado. El logo cuenta con una una balanza con una espada sosteniendo el resto de ella y el nombre de la consultoría.",
            tech: ["ADOBE PS6"]
        }
    ];
    return(cards)    
}

export default FolioObjects;