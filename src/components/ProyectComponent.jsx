import React from "react";
import Vue from "../img/vue.png";
import Typescript from "../img/typescript.png";
import Javascript from "../img/javascript.png";
import Reactjs from "../img/react.png";
import Tailwind from "../img/tailwind.png";
import Django from "../img/django.png";
import Psql from "../img/psql.png";
import Python from "../img/python.png";
import Angular from "../img/angular.png";

function ProyectComponent() {
  return (
    <div className="grid grid-cols-4">
      <div className="nes-container with-title is-centered is-dark col-span-4 lg:col-span-1 capitalize text-white">
        <div className="flex flex-col">
          <a
            href="https://github.com/Manuekle/pokeAppFront"
            target="_blank"
            className="border-4 border-zinc-700"
          >
            <img
              src="https://i0.wp.com/tensei-shinai.com/wp-content/uploads/2022/05/pokeapi-1.png?fit=640%2C360&ssl=1"
              className="w-full h-full"
            />
          </a>
          <br />
          <div className="grid grid-cols-3">
            <div className="flex gap-2 justify-start items-center col-span-2">
              <a
                href="https://github.com/Manuekle/pokeAppFront"
                target="_blank"
              >
                <i className="nes-icon github is-small"></i>
              </a>
              <h3 className="text-lg">PokeAPI</h3>
            </div>
            <div className="flex gap-2 justify-end items-center col-span-1">
              <i className="nes-icon is-small star"></i>
            </div>
            <div className="flex gap-2 justify-start items-start col-span-1">
              <img src={Vue} className="w-4" />
              <img src={Tailwind} className="w-4" />
              <img src={Typescript} className="w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="nes-container with-title is-centered is-dark col-span-4 lg:col-span-1 capitalize text-white">
        <div className="flex flex-col">
          <a
            href="https://github.com/Web-Practice-in-Group/Instagram-clone"
            target="_blank"
            className="border-4 border-zinc-700"
          >
            <img
              src="https://res.cloudinary.com/dgt1da1bz/image/upload/v1630931867/insta_clone_41ccb01769.png"
              className="w-full h-full"
            />
          </a>
          <br />
          <div className="grid grid-cols-3">
            <div className="flex gap-2 justify-start items-center col-span-2">
              <a
                href="https://github.com/Web-Practice-in-Group/Instagram-clone"
                target="_blank"
              >
                <i className="nes-icon github is-small"></i>
              </a>
              <h3 className="text-lg">instagram clone</h3>
            </div>
            <div className="flex gap-2 justify-end items-center col-span-1">
              <i className="nes-icon is-small star"></i>
            </div>
            <div className="flex gap-2 justify-start items-start col-span-1">
              <img src={Reactjs} className="w-4" />
              <img src={Javascript} className="w-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="nes-container with-title is-centered is-dark col-span-4 lg:col-span-1 capitalize text-white">
        <div className="flex flex-col">
          <a
            href="https://github.com/Manuekle/countryAngular"
            target="_blank"
            className="border-4 border-zinc-700"
          >
            <img
              src="https://repository-images.githubusercontent.com/510533740/ba4bcf2d-2397-49e7-92c5-f85c1e312cbb"
              className="w-full h-full"
            />
          </a>
          <br />
          <div className="grid grid-cols-3">
            <div className="flex gap-2 justify-start items-center col-span-2">
              <a
                href="https://github.com/Manuekle/countryAngular"
                target="_blank"
              >
                <i className="nes-icon github is-small"></i>
              </a>
              <h3 className="text-lg">country api</h3>
            </div>
            <div className="flex gap-2 justify-end items-center col-span-1">
              <i className="nes-icon is-small star"></i>
            </div>
            <div className="flex gap-2 justify-start items-start col-span-1">
              <img src={Angular} className="w-4" />
              <img src={Typescript} className="w-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="nes-container with-title is-centered is-dark col-span-4 lg:col-span-1 capitalize text-white">
        <div className="flex flex-col">
          <a
            href="https://github.com/Manuekle/Django-api-rest"
            target="_blank"
            className="border-4 border-zinc-700"
          >
            <img
              src="https://www.django-rest-framework.org/img/admin.png"
              className="w-full h-full"
            />
          </a>
          <br />
          <div className="grid grid-cols-3">
            <div className="flex gap-2 justify-start items-center col-span-2">
              <a
                href="https://github.com/Manuekle/Django-api-rest"
                target="_blank"
              >
                <i className="nes-icon github is-small"></i>
              </a>
              <h3 className="text-lg">Django api rest</h3>
            </div>
            <div className="flex gap-2 justify-end items-center col-span-1">
              <i className="nes-icon is-small star"></i>
            </div>
            <div className="flex gap-2 justify-start items-start col-span-1">
              <img src={Python} className="w-4" />
              <img src={Django} className="w-4" />
              <img src={Psql} className="w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProyectComponent;
