import Image from "next/image";
import React from "react";

export default function SectionUser({ user }) {
  console.log(user);
  return (
    <div>
      <div className="bg-white rounded shadow p-4">
        {user ? (
          <div>
            <Image
              width={40}
              height={40}
              src={user.image}
              alt="Avatar"
              className="rounded-full w-20 h-20 mx-auto mb-4"
            ></Image>
            <p className="text-center">
              {user.firstName} {user.lastName}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Address:</strong> {user.address.address},{" "}
              {user.address.city}
            </p>
            <div className="mt-4">
              <p className="font-bold text-xl">Card Block</p>
              <p>
                <strong>Card Number:</strong> {user.bank.cardNumber}
              </p>
              <p>
                <strong>Card Type:</strong> {user.bank.cardType}
              </p>
              <p>
                <strong>Card Expire:</strong> {user.bank.cardExpire}
              </p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Company Block</p>
              <p>
                <strong>Company Name:</strong> {user.company.name}
              </p>
              <p>
                <strong>Company Address:</strong> {user.company.address.address}
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
