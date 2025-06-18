/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import entity.Device;
import entity.History;
import entity.Status;
import entity.User;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.HibernateUtil;
import org.hibernate.Criteria;
import org.hibernate.Session;

/**
 *
 * @author Prince
 */
@WebServlet(name = "Test", urlPatterns = {"/Test"})
public class Test extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        try {
            Session session = HibernateUtil.getSessionFactory().openSession();

            Criteria criteria = session.createCriteria(User.class);
            ArrayList<User> userList = (ArrayList<User>) criteria.list();

            for (User user : userList) {
                resp.getWriter().print(user.getId());
                resp.getWriter().print(" " + user.getName());
                resp.getWriter().print(" " + user.getPin());
                resp.getWriter().println("");
            }

            Criteria criteria1 = session.createCriteria(Status.class);
            ArrayList<Status> statusList = (ArrayList<Status>) criteria1.list();

            for (Status status : statusList) {
                resp.getWriter().print(status.getId());
                resp.getWriter().print(" " + status.getName());
                resp.getWriter().println("");
            }

            Criteria criteria2 = session.createCriteria(Device.class);
            ArrayList<Device> deviceList = (ArrayList<Device>) criteria2.list();

            for (Device device : deviceList) {
                resp.getWriter().print(device.getId());
                resp.getWriter().print(" " + device.getName());
                resp.getWriter().println("");
            }
            
            Criteria criteria3 = session.createCriteria(History.class);
            ArrayList<History> historyList = (ArrayList<History>) criteria3.list();

            for (History history : historyList) {
                resp.getWriter().print(history.getId());
                resp.getWriter().print(" " + history.getDatetime());
                resp.getWriter().print(" " + history.getDevice().getName());
                resp.getWriter().print(" " + history.getStatus().getName());
                resp.getWriter().println("");
            }

            session.close();

        } catch (Exception e) {
            System.out.println("Error: AddAddress: doGet" + new Date());
//            e.printStackTrace();
        }

    }

}
