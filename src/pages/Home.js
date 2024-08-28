import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import "../App.css"
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* Intro Section */}
      <section id="intro">
        <h1>Welcome to Our Website</h1>
        <p>This is the intro section.</p>
        <p>Below is a brief overview of our pages:</p>
        <ul>
          <li>Documentation: Learn about our API and how to use it.
            <Link to="/Documentation"><FaArrowRight />
            </Link>
            <p>Pellentesque habitant morbi tristique senectus <br/> et netus et malesuada fames ac turpis egestas.<br/> Vestibulum tortor quam, feugiat vitae, ultricies eget,<br/> tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean <br/>ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet<br/> est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum <br/>sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, <br/>elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus <br/>lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus,<br/> neque id cursus faucibus, tortor neque egestas augue, <br/>eu vulputate magna eros eu erat. Aliquam<br/> erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,<br/> facilisis luctus, metus</p>
            </li>
          <li>Demo: Try out our demo to see our product in action.
            <Link to="/Demo"><FaArrowRight />
            </Link>
            <p>Pellentesque habitant morbi tristique senectus <br/> et netus et malesuada fames ac turpis egestas.<br/> Vestibulum tortor quam, feugiat vitae, ultricies eget,<br/> tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean <br/>ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet<br/> est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum <br/>sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, <br/>elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus <br/>lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus,<br/> neque id cursus faucibus, tortor neque egestas augue, <br/>eu vulputate magna eros eu erat. Aliquam<br/> erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,<br/> facilisis luctus, metus</p>
            </li>
          <li>Contact Us: Get in touch with us for any questions or feedback.
            <Link to="/Contactus"><FaArrowRight />
            </Link>
            <p>Pellentesque habitant morbi tristique senectus <br/> et netus et malesuada fames ac turpis egestas.<br/> Vestibulum tortor quam, feugiat vitae, ultricies eget,<br/> tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean <br/>ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet<br/> est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum <br/>sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, <br/>elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus <br/>lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus,<br/> neque id cursus faucibus, tortor neque egestas augue, <br/>eu vulputate magna eros eu erat. Aliquam<br/> erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,<br/> facilisis luctus, metus</p>
            </li>
        </ul>
      </section>
    </div>
  );
}