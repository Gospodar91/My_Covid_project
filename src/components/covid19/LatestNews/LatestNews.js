import React  from "react";
import css from './latestNews.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 120,
  },
});


const LatestNews = ({newsData}) => {
  

  const classes = useStyles();

  return (
    <>
    <div className={css.newsContainer}>
        {newsData &&
      newsData.map((news) => (
    <Card className={classes.root}>
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
          <Typography variant="body2" color="textSecondary" component="p">
          {news.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a className={css.link} href={news.url}>
          Learn More</a>
        </Button>
      </CardActions>
    </Card>
      )
  )
  
}
</div>

<div className={css.icons}>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> 
</>
  )
}
  
  export default LatestNews;




//   <div className={css.newsContainer}>
//   <ul className={css.newsList}>
//     {newsData &&
//       newsData.map((news) => (
//         <li key={news.puplishedAt} className={css.newsItem}>
//           <div className={css.imageNews}>
       
//             <img className='backup_picture' alt='Sorry, not available' src={news.urlToImage} />
//           </div>
//           <h3 className={css.author}>Author:{news.author}</h3>
//           <h3 className={css.title}>{news.title}</h3>
//           <p className={css.description}>
//             Description:{news.description}
//           </p>
          
//           <button type="button"><a className={css.link} href={news.url}>READ MORE INFO</a></button>
//         </li>
//       ))}
//   </ul>
// </div>   