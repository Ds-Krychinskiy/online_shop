import Typography from "../../atoms/typography";

const Basket = ({message}) => {
    return(
        <div>
            <Typography>Ваш заказ {message}</Typography>
        </div>
    )
}

export default Basket;