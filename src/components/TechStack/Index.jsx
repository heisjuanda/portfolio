/* eslint-disable react/prop-types */
import { useLayoutEffect, useRef } from "react";

import Matter from "matter-js";

import { Button } from "../../../common/Button/Button";

import "./TechStack.css";

export const TechStack = ({ techStackImages }) => {
  const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

  const canvasRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    let engine, render, runner, mouse;
    const handleResetCanvas = () => {
      if (engine && render && runner && mouse) {
        Engine.clear(engine);
        Render.stop(render);
        Runner.stop(runner);
        Mouse.clearSourceEvents(mouse);
      }
      if (canvasRef.current) {
        engine = Engine.create();
        render = Render.create({
          canvas: canvasRef.current,
          engine: engine,
          options: {
            background: "white",
            wireframes: false,
            width: window.innerWidth,
            height: window.innerHeight,
          },
        });
        let boxes = [];
        for (const logo of techStackImages) {
          let box = Bodies.rectangle(window.innerWidth / 2, 0, 74, 74, {
            label: "hola",
            density: 0.8,
            frictionAir: 0.01,
            restitution: 0.5,
            friction: 0.001,
            render: {
              sprite: {
                texture: logo,
              },
            },
          });
          boxes.push(box);
        }
        let ground = Bodies.rectangle(
          window.innerWidth / 2,
          window.innerHeight,
          window.innerWidth,
          1,
          { isStatic: true }
        );
        let wallL = Bodies.rectangle(
          window.innerWidth,
          window.innerHeight / 2,
          1,
          window.innerHeight,
          { isStatic: true }
        );
        let wallR = Bodies.rectangle(
          0,
          window.innerHeight / 2,
          1,
          window.innerHeight,
          { isStatic: true }
        );
        let ciel = Bodies.rectangle(
          window.innerWidth / 2,
          0,
          window.innerWidth,
          1,
          { isStatic: true }
        );
        for (const box of boxes) {
          Composite.add(engine.world, [box, ground, wallL, wallR, ciel]);
        }
        Render.run(render);

        runner = Runner.create();

        Runner.run(runner, engine);

        mouse = Mouse.create(render.canvas);
        let mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false,
            },
          },
        });

        Composite.add(engine.world, mouseConstraint);
      }
    };
    handleResetCanvas();

    buttonRef.current = document.querySelector(".reset-btn__tech");

    if (buttonRef.current) {
      buttonRef.current.addEventListener("click", handleResetCanvas);
    }

    window.addEventListener("resize", handleResetCanvas);

    return () => {
      window.removeEventListener("resize", handleResetCanvas);
      Engine.clear(engine);
      Render.stop(render);
      Runner.stop(runner);
      Mouse.clearSourceEvents(mouse);
    };
  }, [
    Bodies,
    Composite,
    Engine,
    Mouse,
    MouseConstraint,
    Render,
    Runner,
    techStackImages,
  ]);

  return (
    <section className="tech-tack-section">
      <Button className={"reset-btn__tech"} text="Reset" />
      <canvas ref={canvasRef}></canvas>
    </section>
  );
};
