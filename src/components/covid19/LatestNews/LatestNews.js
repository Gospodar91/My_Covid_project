import React from "react";
import css from "./latestNews.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const LatestNews = ({ newsData }) => {
  const classes = useStyles();
  return (
    <>
      <div className={css.newsContainer}>
        {newsData &&
          ((<h2 className={css.title}>Latest news</h2>),
          newsData.map((news) => (
            <Card key={news.title} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={news.urlToImage}
                  title="Not Available"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {news.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {news.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" color="primary">
                  <a className={css.link} href={news.url}>
                    Learn More
                  </a>
                </Button>
              </CardActions>
            </Card>
          )))}
      </div>

      <div className={css.icons}>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
};

export default LatestNews;
