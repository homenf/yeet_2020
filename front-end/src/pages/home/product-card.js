import React from "react"
import {
    makeStyles,
    Card,
    CardContent,
    Typography,
    Fab
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles({
    card: {
        display: "flex",
        width: 800,
        justifyContent: "center",
        padding: 10
    },
    content: {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center"
    },
    title: {
        marginBottom: 20
    },
    button: {
        backgroundColor: "rgb(255,242,0)",
        color: "rgb(0,70,190)"
    },
    media: {
        width: 300,
        height: 150
    }
});

const ProductCard = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={product["img"]}
                title={product["name"]}
            />
            <CardActionArea>
            <CardContent className={classes.content}>
                <Typography className={classes.title} variant="h6">
                    {product["name"]}
                </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    )
};

export default ProductCard
