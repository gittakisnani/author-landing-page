import { useState, useEffect } from 'react'


interface WindowSize {
    width: number
    height: number
}

const check = [document, window].every(el => typeof el !== "undefined")

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: check ? document.body.clientWidth : 0,
    height: check ? document.body.clientHeight : 0
  })

  useEffect(() => {
    if(!check) return;
    function handleResize() {
        setWindowSize({
            width: document.body.clientWidth,
            height: document.body.clientHeight
        })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

  }, [])

  return windowSize;
}

export default useWindowSize