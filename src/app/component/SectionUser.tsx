import Image from "next/image";
import React from "react";

export default function SectionUser({ user }) {
  return (
    <div>
      <div className="bg-white rounded shadow p-4">
        {user ? (
          <div>
            {/* <img src={user.avatar} alt="Avatar" className="rounded-full w-20 h-20 mx-auto mb-4" /> */}
            <Image
              src={user.avatar}
              alt="Avatar"
              className="rounded-full w-20 h-20 mx-auto mb-4"
            ></Image>
            <p className="text-center">
              {user.name.first} {user.name.last}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Address:</strong> {user.address.street},{" "}
              {user.address.city}
            </p>
            <div className="mt-4">
              <p>
                <strong>Card Block:</strong>
              </p>
              <p>
                <strong>Card Number:</strong> {user.card.number}
              </p>
              <p>
                <strong>Card Type:</strong> {user.card.type}
              </p>
              <p>
                <strong>Card Expire:</strong> {user.card.expire}
              </p>
            </div>
            <div className="mt-4">
              <p>
                <strong>Company Block:</strong>
              </p>
              <p>
                <strong>Company Name:</strong> {user.company.name}
              </p>
              <p>
                <strong>Company Address:</strong> {user.company.address}
              </p>
              <p>
                <strong>Department:</strong> {user.company.department}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center">
            Select a user from the table to view details.
          </p>
        )}
      </div>
    </div>
  );
}
