import React from "react";
import "./page.css";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { data } from "../../data";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowLeft ,MdKeyboardArrowRight} from "react-icons/md";
const Page = () => {
  return (
    <div className="page">
      <div className="head">
        <div className="heading">
          <p>Units</p>
        </div>
        <div className="btns">
          <button className="btn1">
            <HiOutlinePlusCircle />
            AddUnit
          </button>
          <button className="btn2">
            <IoFilterOutline />
            Hide Filters
            <IoIosArrowUp />
          </button>
        </div>
      </div>

      <div className="sheet">
        <div className="sheet-container">
        <div className="left">

          <table className="unit-table">
            <thead>
              <tr>
                <th>Unit</th>
                <th>Unit Mac</th>
                <th>Unit SIM</th>
                <th>Unit Type</th>
                <th>Location</th>
                <th>Vehicle Reg</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.unit}</td>
                  <td>{item.unitMac}</td>
                  <td>{item.unitsim}</td>
                  <td>{item.unittype}</td>
                  <td>{item.location}</td>
                  <td>{item.VehicleReg}</td>
                  <td>{item.Status}</td>
                  <td>{item.Actions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="right">
          <h3>Filters</h3>
          <div className="details">
            <div className="container-sidebar">
              <span>Customer</span>
              <div className="drop-down-arrow">
                <input type="text" className="" placeholder="all customers"/>
                <RiArrowDropDownLine />
              </div>
            </div>
            <div className="container-sidebar">
              <span>Company</span>
              <div className="drop-down-arrow">
                <input type="text" className="" placeholder="all companies"/>
                <RiArrowDropDownLine />
              </div>
            </div>
            <div className="container-sidebar">
              <span>Region</span>
              <div className="drop-down-arrow">
                <input type="text" className="" placeholder="all regions" />
                <RiArrowDropDownLine />
              </div>
            </div>
            <div className="container-sidebar" >
              <span>Location</span>
              <div className="drop-down-arrow">
                <input type="text" className="" placeholder='all locations'/>
                <RiArrowDropDownLine />
              </div>
            </div>
            <div className="container-sidebar">
              <span>Unit Type</span>
              <div className="drop-down-arrow">
                <input type="text" className=""  placeholder="all unit types"/>
                <RiArrowDropDownLine />
              </div>
            </div>
            <div className="container-sidebar">
              <span>Status</span>
              <div className="drop-down-arrow">
                <input type="text" className="" placeholder="View all"/>
                <RiArrowDropDownLine />
              </div>
            </div>
          </div>
        </div>
        </div>
       
      </div>
      <div className="pagination">
          <span><MdKeyboardArrowLeft /></span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span><MdKeyboardArrowRight /></span>
        </div>
     
    </div>
  );
};

export default Page;
