import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from "../layout/Avatar";

const HomeCard = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };

    return (
      <div className="container">
      <div className="py-4">
        <div className="row">
        {users.map((user, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={user.id}>
              <div className="card shadow text-center py-4">
                <Avatar url={`https://i.pravatar.cc/150?img=${index}`} />
                <div className="card-body">
                  <h5 className="card-title mb-0">{user.name}</h5>
                  <p className="text-muted small">{user.email}</p>
                  <Link
                    to={`/users/${user.id}`}
                    className="btn btn-primary btn-profile"
                  >
                    View Profile
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
            );
};

            export default HomeCard;
