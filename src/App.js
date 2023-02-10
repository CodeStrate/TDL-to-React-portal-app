import React from 'react'
import './App.css'
import {motion, AnimatePresence} from 'framer-motion'

export default function App() {
  return (
    <div className='App'>
      <Modal><h1>Course Overview</h1></Modal>
    </div>
  )
}

const Modal = (props) => {
  const [open, setOpen] = React.useState(true)
  return (
   <AnimatePresence>
    {open && (
      <>
    <motion.div 
    initial={{
      opacity: 0
    }}
    animate={{
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }}
    exit={{
      opacity: 0,
      transition: {
        delay: 0.5,
      }
    }}
    onClick={() => setOpen(false)}
    className='modal-backdrop' />
      <motion.div
      initial={{
        scale: 0
      }}
      animate={{
        scale: 1,
        transition: {
          delay: 0.3,
          duration: 0.5
        }
      }}
      exit={{
        scale: 0,
        transition: {
          delay: 0.5,
        }
      }}
      className='modal-content-wrapper' >
        <motion.div
        className='modal-content'
        initial={{
          x: 200,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.3
          }
        }}
        exit={{
          x: 200,
          opacity: 0,
          transition: {
            duration: 0.5
          }
        }}
        >
        {props.children}
        </motion.div>
      </motion.div>
    </>
    )}
   </AnimatePresence>
  )
}