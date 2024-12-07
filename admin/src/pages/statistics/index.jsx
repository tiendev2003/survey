import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../component/email/Wrapper";
import Layout from "../../component/home/Layout";
import { fetchSurveyAllAdmin, fetchSurveyStatis } from "../../features/khaosat/khaosatSlice";
import useMenu from "../../hooks/useMenu";
import "./index.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { khaosats, status, error, thongke } = useSelector((state) => state.khaosat);
  const [currentPage, setCurrentPage] = useState(1);
  const [surveysPerPage, setSurveysPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  
  useEffect(() => {
    dispatch(fetchSurveyAllAdmin());
  }, [dispatch]);
console.log(thongke)
  const classData = {
    labels: thongke?.classStats?.map((stat) => stat.Class.name) || [],
    datasets: [
      {
        label: "Số lượng phản hồi",
        data: thongke?.classStats?.map((stat) => stat.response_count) || [],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const departmentData = {
    labels: thongke?.departmentStats?.map((stat) => stat?.Department?.name) || [],
    datasets: [
      {
        label: "Số lượng phản hồi",
        data: thongke?.departmentStats?.map((stat) => stat?.response_count) || [],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const classOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Số lượng phản hồi",
        },
      },
      x: {
        title: {
          display: true,
          text: "Các lớp",
        },
      },
    },
  };

  const departmentOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Số lượng phản hồi",
        },
      },
      x: {
        title: {
          display: true,
          text: "Khoa",
        },
      },
    },
  };

  const indexOfLastSurvey = currentPage * surveysPerPage;
  const indexOfFirstSurvey = indexOfLastSurvey - surveysPerPage;
  const currentSurveys = khaosats.slice(indexOfFirstSurvey, indexOfLastSurvey);

  const handleSurveyClick = (survey) => {
    setSelectedSurvey(survey);
    console.log(survey);
    dispatch(fetchSurveyStatis(survey.id));
  };

  useMenu();
  return (
    <Layout>
      <Wrapper>
        <div className="container-fluid p-0">
          <div className="crancy-table crancy-table__support mg-top-30">
            <div className="crancy-table__heading">
              <h3 className="crancy-table__title mb-0">Danh sách khảo sát</h3>
            </div>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="table_1"
                role="tabpanel"
                aria-labelledby="table_1"
              >
                <table
                  id="crancy-table__main"
                  className="crancy-table__main crancy-table__ticket"
                >
                  <thead className="crancy-table__head">
                    <tr>
                      <th className="crancy-table__column-1 crancy-table__h1">
                        ID
                      </th>
                      <th className="crancy-table__column-2 crancy-table__h2">
                        Title
                      </th>
                      <th className="crancy-table__column-3 crancy-table__h3">
                        Description
                      </th>
                      <th className="crancy-table__column-4 crancy-table__h4">
                        Start Date
                      </th>
                      <th className="crancy-table__column-5 crancy-table__h5">
                        End Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="crancy-table__body">
                    {currentSurveys.map((survey) => {
                      const isPastEndDate =
                        new Date(survey.end_date) < new Date();
                      return (
                        <tr
                          key={survey.id}
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => handleSurveyClick(survey)}
                        >
                          <td className="crancy-table__column-1 crancy-table__data-1">
                            {survey.id}
                          </td>
                          <td className="crancy-table__column-2 crancy-table__data-2">
                            {survey.title}
                          </td>
                          <td className="crancy-table__column-3 crancy-table__data-3">
                            {survey.description}
                          </td>
                          <td className="crancy-table__column-4 crancy-table__data-4">
                            {new Date(survey.start_date).toLocaleDateString()}
                          </td>
                          <td className="crancy-table__column-5 crancy-table__data-5">
                            {new Date(survey.end_date).toLocaleDateString()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="crancy-table-bottom">
                  <div
                    id="crancy-table__main_filter"
                    className="dataTables_filter"
                  >
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder=""
                        aria-controls="crancy-table__main"
                      />
                    </label>
                  </div>
                  <div
                    className="dataTables_length"
                    id="crancy-table__main_length"
                  >
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="crancy-table__main_paginate"
                    >
                      <ul className="pagination">
                        <li
                          className={`paginate_button page-item previous ${
                            currentPage === 1 ? "disabled" : ""
                          }`}
                          id="crancy-table__main_previous"
                          onClick={() =>
                            currentPage > 1 && setCurrentPage(currentPage - 1)
                          }
                        >
                          <a
                            aria-controls="crancy-table__main"
                            data-dt-idx="previous"
                            tabIndex="0"
                            className="page-link"
                          >
                            <i className="fas fa-angle-left"></i>
                          </a>
                        </li>
                        {Array.from(
                          Array(
                            Math.ceil(khaosats.length / surveysPerPage)
                          ).keys()
                        ).map((id, index) => (
                          <li
                            className={`paginate_button page-item ${
                              currentPage === index + 1 ? "active" : ""
                            }`}
                            onClick={() => setCurrentPage(index + 1)}
                            key={index + "key"}
                          >
                            <a
                              aria-controls="crancy-table__main"
                              data-dt-idx="0"
                              tabIndex="0"
                              className="page-link"
                            >
                              {index + 1}
                            </a>
                          </li>
                        ))}
                        <li
                          className={`paginate_button page-item next ${
                            currentPage ===
                            Math.ceil(khaosats.length / surveysPerPage)
                              ? "disabled"
                              : ""
                          }`}
                          id="crancy-table__main_next"
                          onClick={() =>
                            currentPage <
                              Math.ceil(khaosats.length / surveysPerPage) &&
                            setCurrentPage(currentPage + 1)
                          }
                        >
                          <a
                            aria-controls="crancy-table__main"
                            data-dt-idx="next"
                            tabIndex="0"
                            className="page-link"
                          >
                            <i className="fas fa-angle-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {selectedSurvey && (
            <div className="charts-container">
              <Bar data={classData} options={classOptions} />
              <Bar data={departmentData} options={departmentOptions} />
            </div>
          )}
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Statistics;
