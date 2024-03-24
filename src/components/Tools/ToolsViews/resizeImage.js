function ResizeImage() {
    return(
        <div>
            <form method="POST" action="/process" encType="multipart/form-data">
                <input type="file" name="image" accept="image/*"/>
                <input type="text" name="w" placeholder="Width Deseado"/>
                <input type="text" name="h" placeholder="Height Deseado"/>
                <button>ENVIAR</button>
            </form>
        </div>
    )
}

export default ResizeImage;