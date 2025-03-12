import React, { Component } from "react";

interface ICardProps {
  title: string;
  url: string;
  description: string;
  tools: [];
}
interface ICardState {}

export default class Card extends Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }
  render() {
    return (
      <>
        <div className=" flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-2 ml-2">
          <div className="relative overflow-hidden text-white rounded-md"></div>
          <div className="p-4">
            <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
              {this.props.title}
            </h6>
            <p className="text-slate-600 leading-normal font-light">
              {this.props.description}
            </p>
            <span className="flex flex-row">
              <img
                src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
                width={40}
                height={10}
              ></img>
              <img
                src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
                width={40}
                height={10}
              ></img>
              <img
                src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
                width={40}
                height={10}
              ></img>
            </span>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <a href="#">
              <button
                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Github
              </button>
            </a>
          </div>
        </div>
      </>
    );
  }
}
