/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import entity.Device;
import entity.History;
import entity.Status;
import java.io.IOException;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.HibernateUtil;
import org.hibernate.Session;

/**
 *
 * @author Prince
 */
@WebServlet(name = "SaveStatus", urlPatterns = {"/SaveStatus"})
public class SaveStatus extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
//            System.out.println("hello");
            Session session = HibernateUtil.getSessionFactory().openSession();
            Gson gson = new Gson();
            JsonObject resp_json = new JsonObject();
            resp_json.addProperty("success", false);
            resp_json.addProperty("message", "Unable to process your request");

            String device_id = req.getParameter("d_id");
            String status_id = req.getParameter("s_id");

            Device device = (Device) session.get(Device.class, Integer.parseInt(device_id));
            Status status = (Status) session.get(Status.class, Integer.parseInt(status_id));

            History history = new History();
            history.setDatetime(new Date());
            history.setDevice(device);
            history.setStatus(status);

            session.save(history);
            session.beginTransaction().commit();
            session.close();

            resp_json.addProperty("success", true);
            resp_json.addProperty("message", "Status Updated");

            resp.setContentType("application/json");
            resp.getWriter().write(gson.toJson(resp_json));

        } catch (Exception e) {
        }
    }

}
