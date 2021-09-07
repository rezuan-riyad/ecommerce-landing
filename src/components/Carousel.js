import React, { useState, useEffect, useRef } from 'react'
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';

const styles = makeStyles((theme) => ({
  active: {
    color: theme.palette.secondary.light
  },
  btnBox: {
    padding: "4px 2px"
  }
}))

export default function Carousel({ slideItems, interval, duration, height }) {
  const [index, setIndex] = useState(0)
  const classes = styles()

  const totalSlides = slideItems.length

  const onIncrement = () => {
    const increment = + 1
    const newIndex = (index + increment + totalSlides) % totalSlides
    setIndex(newIndex)
  }

  const onDecrement = () => {
    const decrement = - 1
    const newIndex = (index + decrement + totalSlides) % totalSlides
    setIndex(newIndex)
  }

  useEffect(() => {
    // need proper comment
    const loopControler = () => {
      let i = 0
      return function () {
        let addedI = i++
        return (addedI + 1 + totalSlides) % totalSlides
      }
    }
    const indexGenerator = loopControler()

    let timer = setInterval(() => {
      const _newIndex = indexGenerator()
      setIndex(_newIndex)
    }, interval)

    // clear timer after 1 min
    setTimeout(() => {
      clearInterval(timer)
    }, duration)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <CarouselSlide
        content={slideItems[index]}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        height={height} />
      {
        !slideItems[0].small ?
          <Box display="flex" justifyContent="center">
            {
              slideItems.map((item, i) => (
                <Box key={i} className={classes.btnBox}>
                  <FiberManualRecordSharpIcon
                    onClick={() => setIndex(i)}
                    fontSize="small"
                    color="disabled"
                    className={i === index ? classes.active : null} />
                </Box>
              ))
            }
          </Box> : null
      }
    </div>
  )
}

function CarouselSlide({ content, onIncrement, onDecrement, height }) {
  const { bgColor, title, subtitle } = content
  const useStyles = makeStyles((theme) => ({
    card: {
      background: bgColor,
      borderRadius: 5,
      width: 'inherit',
      height: height,
      position: 'relative',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    leftBtn: {
      ...theme.custom.arrowBtn,
      top: "50%",
      transform: "translateY(-50%)",
      left: 20,
    },
    rightBtn: {
      ...theme.custom.arrowBtn,
      top: "50%",
      transform: "translateY(-50%)",
      right: 20
    }
  }))
  const classes = useStyles()
  const displayRef = useRef(null)
  const [arrowBtnShow, setArrowBtnShow] = useState(false)

  return (
    <Box className={classes.card} ref={displayRef}
      onMouseEnter={() => setArrowBtnShow(true)}
      onMouseLeave={() => setArrowBtnShow(false)}>
      {
        !content.small && arrowBtnShow ?
          <Box
            className={classes.leftBtn}
            onClick={onDecrement}
            paddingLeft="6px">
            <ArrowBackIosIcon fontSize="small" color="disabled" />
          </Box> : null
      }
      <Box textAlign="center">
        {
          !content.small ?
            <Typography variant="h4">{title}</Typography> : null
        }
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Box>
      {
        !content.small && arrowBtnShow ?
          <Box className={classes.rightBtn} onClick={onIncrement}>
            <ArrowForwardIosIcon fontSize="small" color="disabled" />
          </Box> : null
      }
    </Box>
  )
}